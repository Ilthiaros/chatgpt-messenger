import NewChat from "./NewChat"

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            {/*New Chat*/   }
            <NewChat />
            <div>
                {/*ModelSelectoion*/}
            </div>

            {/*ChatRows*/}
        </div>
    </div>
  )
}

export default SideBar