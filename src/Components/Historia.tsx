interface Props {
  story: string;
}

const Historia: React.FC<Props> = ({ story }) => {
  return <p>{story || "Tu historia aparecerá aquí"}</p>;
};

export default Historia;
