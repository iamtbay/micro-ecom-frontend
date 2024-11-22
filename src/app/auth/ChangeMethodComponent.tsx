interface Props {
  authMethod: string;
  changeMethod: (authMethod: string) => void;
}
const ChangeMethodComponent = ({ authMethod, changeMethod }: Props) => {
  return (
    <>
      {authMethod === "login" ? (
        <p className="text-sm font-medium flex gap-2">
          Don&#39;t have an account? 
          <span
            onClick={() => changeMethod("register")}
            className="underline cursor-pointer"
          >
            Register
          </span>
        </p>
      ) : (
        <p className="text-sm font-medium flex gap-2">
          Already have an account ?
          <span
            className="underline cursor-pointer"
            onClick={() => changeMethod("login")}
          >
            Login
          </span>
        </p>
      )}
    </>
  );
};
export default ChangeMethodComponent;
