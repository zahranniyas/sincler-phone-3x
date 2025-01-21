import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="p-5 sm:px-10">
        <div className="screen-max-width">
            <div>
                <p className="text-xs font-semibold text-gray">
                    More ways to shop: {' '}
                    <span className="text-blue underline">
                        Find a Sincler Store
                    </span>
                    {' '} or {' '}
                    <span className="text-blue underline">
                        other retailers
                    </span>
                    {' '} near you
                </p>
                <p className="text-xs font-semibold text-gray">
                    Or call +94 11 2 657 657
                </p>
            </div>

            <div className="my-5 h-px w-full bg-neutral-700" />

            <div className="flex flex-col justify-between md:flex-row md:items-center">
                <p className="text-xs font-semibold text-gray">
                    Copyright @ 2024 Sincler Inc. All rights reserved.
                </p>
                <div className="flex">
                    {footerLinks.map((link, i) => (
                        <p key={link} className="text-xs font-semibold text-gray">
                            {link}{' '}
                            {i !== footerLinks.length - 1 && (
                                <span className="mx-2"> | </span>
                            )}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer