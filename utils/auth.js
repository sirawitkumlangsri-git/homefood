export const getGoogleAuthConfig = () => {
    const config = useRuntimeConfig();
    
    return {
      CLIENT_ID: config.public.GOOGLE_CLIENT_ID,
      REDIRECT_URI: config.public.GOOGLE_REDIRECT_URI,
      SCOPES: ['email', 'profile', 'openid']
    };
  };