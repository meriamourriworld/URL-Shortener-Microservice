

const validateUrl = (req, res, next)=>
    {
        try {
            const parsedUrl = new URL(req.body.url);
            return parsedUrl;
        } catch (error) {
                res.send({ error: 'invalid url' });
        }
        next();
    }




    module.exports = {validateUrl};