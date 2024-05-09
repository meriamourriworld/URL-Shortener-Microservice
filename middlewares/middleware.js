

const validateUrlFormat = async (req, res, next)=>
    {
        try {
            const parsedUrl =  new URL(req.body.url);
            req.body.hostname = parsedUrl.hostname;
        } catch (error) {
                return res.send({ error: 'invalid url' });
        }
        next();
    }




    module.exports = {validateUrlFormat};