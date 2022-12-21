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
        1. bag with sidebar scroll down (done with half!)
        2. make animation in questions more accurate (too hard)
        3. chech for small devices fonts sizes
        4. check in header title (make it in center) (done!)
        5. check size of carousel items
        6. check size of sidebar icon for small devices
        7. check size of text in carousel items
        8. all tasks in review
        9. change ease in feedbacks (done!)
        10. make font size smaller
        11. change margin in header (done!)
        12. change sidebar margin (done!)
        13. bug in downloading fonts (check it after deploy all bugs)
        14. set shadow on carousel items (don't like it)
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
