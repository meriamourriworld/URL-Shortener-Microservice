

const validateUrl = async (req, res, next)=>
    {
        try {
            const parsedUrl =  new URL(req.body.url);
        } catch (error) {
                return res.send({ error: 'invalid url' });
        }
        next();
    }




    module.exports = {validateUrl};