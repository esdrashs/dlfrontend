import react from "react";
import './css/styles.css'; //imports local css

const Main = () => {
    return <div className="main-area">
            <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-8 align-self-end">
                    <h1 className="text-white font-weight-bold">O seu software é único</h1>
                    <hr className="divider" />
                </div>
                <div className="col-lg-8 align-self-baseline">
                    <p className="text-white-75 mb-5">Crie connosco a solução digital personalizada ao seu negócio, eliminando desafios de gestão e impulsionando o seu crescimento!</p>
                    <p className="text-white-75 mb-5">O seu negócio é único. O seu software também deve ser!</p>
                    <a className="btn btn-primary btn-xl" href="#contact">Crie o seu já!</a>
                </div>
            </div>
        </div>
    </header>


    <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
            <h2 className="text-center mt-0">Nossas Soluções</h2>
            <hr className="divider" />
            <div className="row gx-4 gx-lg-5">
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                        <h3 className="h4 mb-2">Dark One</h3>
                        <p className="text-muted mb-0">A custom full packaged Business Management Software (BMS).</p>
                        <br />
                        <a className="btn btn-secondary btn-xl" href="https://darkone.dlappstudio.com">Learn more</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><i className="bi-phone fs-1 text-primary"></i></div>
                        <h3 className="h4 mb-2">Light One</h3>
                        <p className="text-muted mb-0">Sistema de Gestão ideal para pequenos e médios negócios.</p>
                        <br />
                        <a className="btn btn-secondary btn-xl" href="https://darkone.dlappstudio.com">Learn more</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                        <h3 className="h4 mb-2">Criação de Website</h3>
                        <p className="text-muted mb-0">Publique o seu negócio na internet e explore novos mercados.</p>
                        <br />
                        <a className="btn btn-secondary btn-xl" href="https://darkone.dlappstudio.com">Learn more</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                        <h3 className="h4 mb-2">Marcas Personalizadas</h3>
                        <p className="text-muted mb-0">Crie sua própria marca, logotipos de alta qualidade</p>
                        <br />
                        <a className="btn btn-secondary btn-xl" href="https://darkone.dlappstudio.com">Learn more</a>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0">Somos a sua solução!</h2>
                    <hr className="divider divider-light" />
                    <p className="text-white-75 mb-4">Comece desde já e veja o seu negócio crescer. Escolha um dos nossos produtos que mais se adequar para si, e nós cuidamos do resto!</p>
                    <a className="btn btn-light btn-xl" href="#services">Get Started!</a>
                </div>
            </div>
        </div>
    </section>

    <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 col-xl-6 text-center">
                    <h2 className="mt-0">Fale Connosco!</h2>
                    <hr className="divider" />
                    <p className="text-muted mb-5">Pronto para ver a diferença que os nossos sistemas fazem no seu negócio? Deixe os seus dados no formulário abaixo para agendar uma demonstração personalizada!</p>
                </div>
            </div>
            <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                <div className="col-lg-6">
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="form-floating mb-3">
                            <input className="form-control" id="name" type="text" placeholder="Nome..." data-sb-validations="required" />
                            <label htmlFor="name">Full name</label>
                            <div className="invalid-feedback" data-sb-feedback="name:required">Introduza o seu nome.</div>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" id="email" type="email" placeholder="nome@example.com" data-sb-validations="required,email" />
                            <label htmlFor="email">Email address</label>
                            <div className="invalid-feedback" data-sb-feedback="email:required">Introduza o seu email.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Email inválido.</div>
                        </div>
                        <div className="form-floating mb-3">
                            <input className="form-control" id="phone" type="tel" placeholder="+258 12 345 6789" data-sb-validations="required" />
                            <label htmlFor="phone">Phone number</label>
                            <div className="invalid-feedback" data-sb-feedback="phone:required">Introduza um telefone.</div>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required"></textarea>
                            <label htmlFor="message">Message</label>
                            <div className="invalid-feedback" data-sb-feedback="message:required">Introduza uma pequena descrição do seu negócio...</div>
                        </div>
                        
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center mb-3">
                                <div className="fw-bolder">Mensagem enviada com Sucesso!</div>
                                <br />
                                Sua demonstração será agendada brevemente!

                            </div>
                        </div>
                        
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                        
                        <div className="d-grid"><button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
                    </form>
                </div>
            </div>
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-4 text-center mb-5 mb-lg-0">
                    <i className="bi-phone fs-2 mb-3 text-muted"></i>
                    <div>+258 83 123 4567</div>
                </div>
            </div>
        </div>
    </section>        
        </div>;
};

export default Main;