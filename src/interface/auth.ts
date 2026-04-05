interface iSignUp {
  name: string;
  email: string;
  password: string;
}

interface iSignIn {
  email: string;
  password: string;
}

export type { iSignUp, iSignIn };
