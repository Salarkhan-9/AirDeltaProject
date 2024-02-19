import jwt from 'jsonwebtoken';

//The Requests that are made to the backend are intercepted by this middleware
//It verifies the token and then allows the request to proceed
//If no Token, then the request is rejected

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const email = req.headers.email.split(' ')[0];
    const secret = email || 'test';
    console.log(token);

    let decodedData;
    if (token) {
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
      next();
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Authentication failed' });
    return;
    // This stops further execution of the code if an error occurs
  }
};

export default auth;
