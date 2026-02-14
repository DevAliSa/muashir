export const Footer = () => {
    return (
        <footer className="text-center animate-fade-in text-sm text-muted-foreground border-t py-6">
            <p>
                ©{" "}
                {new Date().getFullYear()} {" "}
                <span className="font-semibold text-primary">Muashir</span> 
                {" "} All Rights Reserved.
            </p>
        </footer>
    )
}
export default Footer