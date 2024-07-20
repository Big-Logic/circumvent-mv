function ErrorMsg({ errorMsg }: { errorMsg: string }) {
  return (
    <div className="max-w-[500px] mx-auto my-10 p-8">
      <p className="text-center text-red-500">{errorMsg}</p>
    </div>
  );
}

export default ErrorMsg;
