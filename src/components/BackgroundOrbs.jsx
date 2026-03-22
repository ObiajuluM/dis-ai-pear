export default function BackgroundOrbs() {
  return (
    <>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-[100px] -z-10" />
    </>
  );
}
