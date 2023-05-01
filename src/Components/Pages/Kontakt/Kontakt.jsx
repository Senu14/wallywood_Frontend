import { FormComponantstyle } from "../../Styled/FormComponant.style";
import { ContentWrapper } from "../../App/Elements/ContentWrapper/contentWrapper";
const Kontakt = () => {
  const formSubmitHandler= ()=> {

  }
  return (
    <ContentWrapper>
          <FormComponantstyle>
                <h1>Kontakt</h1>
                <form action="" onSubmit={formSubmitHandler}>
                  <label htmlFor="name">Dit navn</label>
                  <input type="text"  />
                  <label htmlFor="name">Din email</label>
                  <input type="email" />
                  <label htmlFor="name">Din besked</label>
                  <textarea name="text" id="" cols="30" rows="10"/>
                  <button type="submit">Send</button>
                </form>
          </FormComponantstyle>
          </ContentWrapper>
  );
}


export default Kontakt;