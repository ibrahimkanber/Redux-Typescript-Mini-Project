import { ActionType } from './../action-types/index';


interface SearchRepositoriesAction {

    type: ActionType.SEARCH_REPOSITORIES
}
interface SearchRepositoriesSuccessAction {
    payload: string[];
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS
}
interface SearchRepositoriesErrorAction {
    payload: string;
    type: ActionType.SEARCH_REPOSITORIES_ERROR
}


export type Action = SearchRepositoriesAction |SearchRepositoriesSuccessAction |SearchRepositoriesErrorAction