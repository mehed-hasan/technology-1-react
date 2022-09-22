import Comments from '../../components/Home/Comments';
import HowWeWork from '../../components/Service/HowWeWork';
import SimpleNav from '../../components/Solutions/SimpleNav';
import SolutionBanner from '../../components/Solutions/SolutionBanner';
import SolutionGoal from '../../components/Solutions/SolutionGoal';
import '../../css/solution.css';
import { pageTitle} from '../../hooks/title';

function SolutionPage() {

  pageTitle('Solution');
    return ( 
        <>
            <SolutionBanner/>
            <SimpleNav/>
            <SolutionGoal/>
            <HowWeWork hasTitle={true}/>
            <Comments/>

        </>
     );
}

export default SolutionPage;