import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  console.log('login')
  return (
    <div className="loading-screen">
      <h1 className='loading-screen__title'>Loading ...</h1>
    </div>
  );
}

export default LoadingScreen;
