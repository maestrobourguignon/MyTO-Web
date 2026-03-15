import type { CategoriaItem } from '../../interface/interfaces'
import './displayCategorias.css'

export const DisplayCategorias = ({title, data}: {title: string, data: CategoriaItem[]}) => {
  

  return(
  <section id='terapias' className="categories">
        <h2 className="section-title">{title}</h2>
        <div className="grid-categories">
          
          {data.map((item: CategoriaItem) => (
            <a href={`/${item.link}`} className="category-card" key={item.link} style={{ 
              backgroundImage: `linear-gradient(rgba(255,255,255, 0), rgba(255,255,255, 0)), url(${item.imageUrl})` 
            }}>
              <h3>{item.title}</h3>
              <p >{item.description}</p>
              {/* <a href={`/${item.link}`} className="card-link">{item.button} →</a> */}
            </a>
          ))}
        </div>
      </section>
      )
    }