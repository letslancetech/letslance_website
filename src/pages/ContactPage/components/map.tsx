export default function Map() {
  return (
    <section className="bg-white px-4">
      <div className="relative w-full overflow-hidden rounded-lg pt-[27.2%] shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112178.57896688058!2d77.24593402032541!3d28.52226367344823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1748843447963!5m2!1sen!2sin"
          className="absolute left-0 top-0 h-[500px] w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
