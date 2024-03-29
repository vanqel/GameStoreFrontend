import React from "react"
import '../../../app/home.css'
import SectionHeading from '../model/section-heading'
import CategoryCard from '../model/category-card'

const BodyHome = (props) => {
  return (
 <div className="home-main">
  <br></br>
        <div className="home-banner">
            <div className="home-container05">
              <h3 className="home-text19 Heading-3">OpenStore</h3>
              <span className="home-text20">
                <span></span>
                <span>магазин</span>
              </span>
            </div>
          </div>
          <div className="home-container06 max-width-container">
            <div className="home-container07">
              <span className="home-text23">
                <span>
                  OpenStore - маркетплейс цифровых товаров
                </span>
                <br></br>
                <span>
                  Все представленные продукты являются лицензированными
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
        <div className="section-container column">
          <div className="max-width-container">
            <SectionHeading
              heading="Наши категории"
              subtitle="Выберите подходящее"
            ></SectionHeading>
            <div className="home-cards-container">
              <CategoryCard name="Книги"
                              categoryImg="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334862.jpg?t=st=1711221846~exp=1711225446~hmac=45c306f192670cb968462e87ac9a6a39236b937374a464bb1f7dfb80c58ef3ea&w=740"
                              ct="library"
              ></CategoryCard>
              <CategoryCard
                name="Игры"
                categoryImg="https://img.freepik.com/free-vector/game-streamer-concept-elements-illustrated_23-2148932487.jpg?t=st=1711221709~exp=1711225309~hmac=eaa29ee29e99affd1bc47e682aa3606aec96b25661d93f2c5fa88286eb6f4267&w=740"
                ct="games"
              ></CategoryCard>
              <CategoryCard
                name="Персонажи"
                categoryImg="https://img.freepik.com/free-vector/woman-fortuneteller-with-magic-ball-old-book-candle-tarot-cards-table-gypsy-mystic-magician-future-telling-magic-astrology-supernatural-fate-concept_575670-1579.jpg?t=st=1711221802~exp=1711225402~hmac=d37a3d0ae1d392dc587873875b1dcf7aaa849ee6823901e915afa9503e999d1a&w=900"
                ct="heroes"
              ></CategoryCard>
              <CategoryCard
                name="Моя музыка"
                categoryImg="https://img.freepik.com/free-vector/abstract-flat-line-with-music-note-motion-shapes-pattern-cover-design-poster-banner-decoration_460848-15246.jpg?t=st=1711221823~exp=1711225423~hmac=5c01726423bace53d5dfea4dc401c3694d01a09fe46784cc1a93214ef21e42c2&w=900"
                ct="music"
              ></CategoryCard>
              <CategoryCard
                name="Услуги"
                categoryImg="https://img.freepik.com/free-vector/vision-scope-document-abstract-concept-illustration_335657-3812.jpg?t=st=1711221684~exp=1711225284~hmac=427006212eedb82a45ab62fb298ec5b3d5888acbda94952da2c0738b114e0d26&w=740"
                ct="works"
              ></CategoryCard>
            </div>
          </div>
          
        </div>
      </div>    )
}
export default BodyHome