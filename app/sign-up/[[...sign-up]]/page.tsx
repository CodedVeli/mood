import { SignUp } from '@clerk/nextjs' 

export default function SignUpPage() {
  return <SignUp path="/sign-up" routing="path" afterSignUpUrl='/new-user' redirectUrl='/new-user' />
}
