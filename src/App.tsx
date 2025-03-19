function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-100 p-40">
      <div className="bg-pink-100">
        <div>Title</div>
        <div>description</div>
      </div>
      <div className="flex flex-col gap-32">
        <div className="flex justify-between h-fit">
          <div className="flex flex-col">
            <div>title</div>
            <div>description</div>
            <div>description</div>
            <a className="mt-auto underline">link</a>
          </div>
          <img src="" alt="img1" className="bg-black w-160 h-80" />
        </div>
        <div className="flex justify-between h-fit">
          <div className="flex flex-col">
            <div>title</div>
            <div>description</div>
            <div>description</div>
            <a className="mt-auto underline">link</a>
          </div>
          <img src="" alt="img1" className="bg-black w-160 h-80" />
        </div>
      </div>
    </div>
  );
}

export default App;
