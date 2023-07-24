export default function Wrapper({children}: { children: React.ReactNode }) {
    return (
        <div className={'max-w-7xl m-auto pt-14'}>
            {children}
        </div>
    )
}