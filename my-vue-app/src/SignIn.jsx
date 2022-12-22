
function SignIn({ user }) {
  return (
    <h1 className="welcome">
      Welcome to the Manga Store! {user.username}!
    </h1>
  )
}

export default SignIn