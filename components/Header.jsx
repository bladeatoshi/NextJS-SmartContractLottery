import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div className="p-5 border-b-2 flex flex-row">
            <h1 className="py-4 px-4 font-mono text-3xl">Decentralized 
            <span className="text-red-800"> Majestic </span>
            Lottery</h1>
            <div className="ml-auto py-2 px-4">
            <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
