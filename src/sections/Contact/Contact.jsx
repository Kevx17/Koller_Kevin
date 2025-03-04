import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container} >
        <h1 className='sectionTitle'>Contact me</h1>
      <form method='POST' action="https://formspree.io/f/xbldngdq">
        <input maxLength={30} type="text" id='name' name='name' placeholder='Name'/>
        <input type="email" id='email' name='email' placeholder='Email' />
        <textarea name="message" id="message" placeholder='Message'></textarea>
        <input id='submit' type="submit" value="Send" />
      </form>
    </section>
  )
}

export default Contact
