
const Footer = () => {
    return (
        <div className="bg-[#2b3440]">
           <footer className="flex flex-col justify-between lg:flex-row text-neutral-content w-11/12 mx-auto p-10">
  <nav>
    <h6 className="font-semibold text-xl text-[#f57f25] mb-3">Services</h6>
    <div className="flex flex-col *:mb-2">
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
    </div>
  </nav>
  <nav>
    <h6 className="font-semibold text-xl text-[#f57f25] mb-3">Company</h6>
    <div className="flex flex-col *:mb-2">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>  
    </div>
   
  </nav>
  <nav>
    <h6 className=" font-semibold text-xl text-[#f57f25] mb-3">Legal</h6>
    <div className="flex flex-col *:mb-2">
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>    
    </div>

  </nav>
</footer>
        </div>
    );
};

export default Footer;