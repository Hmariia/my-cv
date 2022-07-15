import image from '../content/image.jpg'

const Data = ({ data }) => {
  return (
    <div className='main-data-container'>
      <div className='contact-info'>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <a href={data.link}>{data.link}</a>
      </div>
      <div className='image-about-warpper'>
        <img src={image} alt="profile"></img>
        <div>
          <h1>{data.name}</h1>
          <p>{data.about}</p>
        </div>
      </div>
      <div className='data-wrapper'>
        <h3>Skills</h3>
        <div className='skills'>
          {data.skills.map((skill, index) => <p key={index}>{skill}</p>)}
        </div>
        <h3>Projects</h3>
        <div className='practice'>
          {data.projects.map((item, index) =>
            <div key={index}>
              {index === 0 && <div className='live-link'><a href={item.livelink}>Live stream version</a></div>}
              <p>{item.about}</p>
              <button><a href={item.gitlink}>github link</a></button>
            </div>
          )}
        </div>
        <h3>Education</h3>
        <div className='education'>
          {data.education.map((item) =>
            <div>
              <p>{item.name}</p>
              <p>{item.place}</p>
              <p>{item.date}</p>
            </div>
          )}
        </div>
        <h3>Experience</h3>
        <div className='experience'>
          {data.experience.map((item, index) =>
            <div key={index}>
              <p>{item.position}</p>
              <p>{item.place}</p>
              <p>{item.date}</p>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Data