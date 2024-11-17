import { getGoogleAuthConfig } from '~/utils/auth';

// Google API configuration
const googleClientId = import.meta.env.NUXT_GOOGLE_CLIENT_ID;

export const loadGoogleAPI = () => {
  return new Promise((resolve) => {
    if (window.google?.accounts?.id) {
      resolve();
      return;
    }
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.onload = () => {
      setTimeout(resolve, 100);
    }
    document.head.appendChild(script)
  })
}

export const initGoogleClient = (callback) => {
  if (!window.google?.accounts?.id) {
    console.error('Google API not loaded');
    return;
  }

  try {
    window.google.accounts.id.initialize({
      client_id: googleClientId,
      callback,
      auto_select: false,
      cancel_on_tap_outside: true,
      prompt_parent_id: 'googleButton',
      state_cookie_domain: window.location.hostname,
      ux_mode: 'popup',
    });
  } catch (error) {
    console.error('Failed to initialize Google client:', error);
  }
}

export const handleGoogleLogin = async () => {
  try {
    const { CLIENT_ID, REDIRECT_URI, SCOPES } = getGoogleAuthConfig();
    const baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: 'token',
      redirect_uri: REDIRECT_URI,
      scope: SCOPES.join(' '),
      prompt: 'select_account',
      access_type: 'online',
      include_granted_scopes: 'true'
    });

    window.location.href = `${baseUrl}?${params.toString()}`;
  } catch (error) {
    console.error('Failed to handle Google login:', error);
    throw error;
  }
}

export const fetchGoogleUserInfo = async (accessToken) => {
  try {
    if (!accessToken) {
      console.log('No access token provided');
      return;
    }

    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }

    const data = await response.json();

    // แสดงข้อมูลที่ได้จาก Google API ใน console
    console.log('Google User Data:', {
      googleId: data.sub,
      email: data.email,
      picture: data.picture,
      name: data.name,
      givenName: data.given_name,
      familyName: data.family_name
    });

  } catch (error) {
    console.error('Error fetching Google user info:', error);
  }
}
