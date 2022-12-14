import Header from './components/Header';
import Review from './components/Review';
import Documents from './components/Documents';
import Questions from './components/Questions';
import Feedback from './components/Feedback';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Comment from './components/Comment';

/*
    TODO:
        1. make all the rest styles
        2. make email in gmail
        3. make script for submiting and sending the review and comment
        4. make carousel
        5. make links to telegram and whatsapp
*/

export default function Main() {
    return (
        <>
            <Header />
            <Review />
            <Documents />
            <Questions />
            <Benefits />
            <Feedback />
            <Comment />
            <Footer />
        </>
    )
};
