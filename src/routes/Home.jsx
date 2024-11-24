export default function Home() {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/300623855_570417371461715_5767449349184758025_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFz4S1Vz076UWQeT6mYcIbmIW6qlrhIQbIhbqqWuEhBsqE7mAChx82DEg9r91t99Wg8K2K3pCa-ISYIMLiClpIa&_nc_ohc=HsJR5A1JMU4Q7kNvgHdLVtn&_nc_zt=23&_nc_ht=scontent.fcgp3-1.fna&_nc_gid=A9x3c-Rb8aAwyk7fMQKeE6E&oh=00_AYCpRGfjZhROU3b9yWqzoSFhblb7K2yyEvCH6VNcUnrYKQ&oe=6748C24B"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://krisp.ai/blog/wp-content/uploads/2024/06/business-meeting.webp"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://images.stockcake.com/public/2/e/3/2e329629-bbb8-4bde-8f56-7540238f7dd1_large/professional-business-meeting-stockcake.jpg"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
