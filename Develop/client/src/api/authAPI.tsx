import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin): Promise<{ token: string }> => {
  const response = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Login failed');
  }

  const data = await response.json();
  return { token: data.token };
};

export { login };