import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";


export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user)
    return <button onClick={gitHubSignIn}>Login with GitHub</button>;

  return (
    <div>
      <p>Welcome, {user.displayName} ({user.email})</p>
      <button onClick={firebaseSignOut}>Logout</button>
      <Link href="/week-9/shopping-list">Go to Shopping List</Link>
    </div>
  );
}



