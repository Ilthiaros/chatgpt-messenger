import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center h-screen text-white px-2">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

        <div className='flex space-x-2 text-center'>
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/*Sun icon */}
              <SunIcon className="h-8 w-8" />
              
              <h2>Examples</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"Explain something to me"</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/*Sun icon */}
              <BoltIcon className="h-8 w-8" />
              
              <h2>Capabilities</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"Explain something to me"</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              {/*Sun icon */}
              <ExclamationTriangleIcon className="h-8 w-8" />
              
              <h2>Limitations</h2>
            </div>
            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"Explain something to me"</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}