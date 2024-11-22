interface Props {
  handleStep: () => void;
  steps: number;
  labelText: string;
  isPrevious: boolean;
}
const StepButton = ({ handleStep, steps, labelText, isPrevious }: Props) => {
  return (
    <button
      onClick={handleStep}
      className={`bg-lime-400 hover:bg-lime-500 text-sm
          ${
            isPrevious
              ? steps === 1 && "bg-gray-100 hover:bg-gray-300"
              : steps === 5 && "bg-gray-100 hover:bg-gray-300"
          } duration-500 rounded-2xl p-2`}
      disabled={isPrevious ? steps === 1 : steps === 5}
    >
      {labelText}
    </button>
  );
};
export default StepButton;
