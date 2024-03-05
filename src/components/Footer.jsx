import Resume from '../Full Stack Resume 2024.pdf'

export default function Footer() {
    return (
        <>
            <footer className="d-flex mt-4 justify-content-center">
                <div className="position-absolute bottom-0 p-2 w-100 d-flex justify-content-evenly bg-dark">

                    <a href="https://github.com/Msteven5" data-toggle="tooltip" data-bs-placement="top" title="Click here to check out my GitHub!"><i className="text-white fa-brands fs-4 fa-github"></i></a>
                    <a href="https://linkedin.com/in/michaeldavidsondev" data-toggle="tooltip" data-placement="top" title="Click here to check out my LinkedIn!"><i className="fa-brands text-white fs-4 fa-linkedin"></i></a>
                    <a href={Resume} download='Michael Davidson Resume' data-toggle="tooltip" data-placement="top" title="Click here to download my resume!"><i class="fa-solid fs-4 text-white fa-file"></i></a>

                </div>
            </footer >

        </>
    )
}