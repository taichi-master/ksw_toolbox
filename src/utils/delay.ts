export default function delay ( time: number, value?: unknown ) : Promise<unknown> {
    return new Promise( resolve => setTimeout( () => resolve( typeof value === 'function' ? value() : value ), time ) )
}