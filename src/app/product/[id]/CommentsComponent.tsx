interface Props {
  name: string;
  surname: string;
  point: number;
  comment: string;
  date: string;
}
const CommentsComponent = (props: Props) => {
  return (
    <div className="flex border-2 rounded-2xl p-2 flex-col gap-2 w-[48%] md:w-[32%]">
      <section className="flex justify-between">
        <p className="text-sm">
          {props.name} {props.surname}
        </p>
        <p className="text-sm">{props.point}</p>
      </section>
      <p className="text-sm">{props.comment}</p>
    </div>
  );
};
export default CommentsComponent;
