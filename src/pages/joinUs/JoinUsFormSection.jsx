import JoinUsForm from "./JoinUsForm";

const JoinUsFormSection = () => {
  return (
    <div className="flex my-20 space-x-5">
      <div className="w-3/6">
        <img className="h-auto px-4" src="/team-gl.png" />
      </div>
      <JoinUsForm />
    </div>
  );
};

export default JoinUsFormSection;
