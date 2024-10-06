import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ReactLoading type="spin" color="#3498db" height={50} width={50} />
    </div>
  );
};
export default Loading;
