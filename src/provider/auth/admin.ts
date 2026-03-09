import { createAuthClient } from "better-auth/react";

export const auth = createAuthClient();

export const OAuth = {
  github: async () => {
      const data = await auth.signIn.social({
        provider: "github",
        requestSignUp: false,
      errorCallbackURL: "/sign/in",
      });
      return data;
  },
};
