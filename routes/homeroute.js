const path = require('path');

module.exports = {
    route: (app) => {
        app.get('/', (req, res) => {
            res.sendFile(path.resolve('./www/form.html'));
        });

        app.get('/account', (req, res) => {
            res.sendFile(path.resolve('./www/account.html'));
        });

        app.post('/login', (req, res) => {
            const users = [
                { email: 'email1@example.com', password: 'password1' },
                { email: 'email2@example.com', password: 'password2' },
                { email: 'email3@example.com', password: 'password3' }
            ];

            const { email, password } = req.body;
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                res.json({ valid: true });
            } else {
                res.json({ valid: false });
            }
        });
    }
};
