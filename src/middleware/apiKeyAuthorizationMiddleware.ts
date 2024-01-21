import { Request, Response, NextFunction } from 'express';

const apiKeys: { [key: string]: boolean } = {
  "apiKeyEnabled": true,
  "apiKeyDisabled": false,
  "b7f930d00b914d9db909d97cb1f3a6e6": true,
  // Add more API keys as needed
};

const authorizeWithApiKey = (apiKey: string): boolean => {
  return apiKeys[apiKey] === true;
};

const apiKeyAuthorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader: string | undefined = req.get('Authorization');

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Invalid Authorization header format' });
  }

  const apiKey = authorizationHeader.split(' ')[1];

  if (!authorizeWithApiKey(apiKey)) {
    return res.status(401).json({ error: 'Invalid API key' });
  }

  next();
};

export default apiKeyAuthorizationMiddleware;
