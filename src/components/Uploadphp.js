'use client';
import {useState} from 'react';
import {useRouter} from 'next/navigation';

const Uploadphp = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const router = useRouter();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://app.waseemk.com/uploads/index.php', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.url) {
      setUrl(data.filename);
      console.log(data);
      router.push(`https://share-screenshot.vercel.app/images/${data.filename}`);
    } else {
      console.error(data.error);
    }
  };

  return (
    <div className="min-h-[50vh] mb-52 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-4"
      >
        <label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100"
          />
        </label>
        <button
          type="submit"
          className="px-5 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-600 lg:px-10 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Upload Now
        </button>
      </form>
    </div>
  );
};

export default Uploadphp;
