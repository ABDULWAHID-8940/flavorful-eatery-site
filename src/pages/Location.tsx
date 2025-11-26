const Location = () => {
  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Find Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We are conveniently located in the heart of Nairobi.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Jikoni Restaurant</h2>
          <p className="text-lg text-muted-foreground mb-2">123 Ubuntu Street</p>
          <p className="text-lg text-muted-foreground mb-2">Nairobi, Kenya</p>
          <p className="text-lg text-muted-foreground mb-8">Open Daily: 12:00 PM - 10:00 PM</p>

          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p className="text-lg text-muted-foreground">info@jikoni.co.ke</p>
          <p className="text-lg text-muted-foreground">+254 712 345 678</p>
        </div>
        <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817739591465!2d36.82194631475836!3d-1.286389999064239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5b221d6c9%3A0x462793156093ada0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1678886561139!5m2!1sen!2sus"
            width="100%"
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;