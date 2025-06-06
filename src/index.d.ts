import { PathLike } from 'node:fs';

// declare type AIDHeader<token extends string, data extends string> = {
//   authorization: `firebase ${token}`;
//   'content-type': 'application/json';
//   'x-gql-operation-name': data;
//   'Sec-GPC': '1';
//   'Sec-Fetch-Dest': 'empty';
//   'Sec-Fetch-Mode': 'cors';
//   'Sec-Fetch-Site': 'same-site';
//   Priority: 'u=4';
// };

// declare type ReqData<H extends string> = {
//   headers: {
//     'x-gql-operation-name': H;
//   };
//   body: {
//     operationName: H;
//     variables: object;
//     query: string;
//   };
// };
// declare interface ReqHeaders {
//   GetGameplayAdventure: ReqData<'GetGameplayAdventure'>;
//   GetAdventureDetails: ReqData<'GetAdventureDetails'>;
//   GetScenario: ReqData<'GetScenario'>;
//   GetScenarioScripting: ReqData<'GetScenarioScripting'>;
//   GetAiVersions: ReqData<'GetAiVersions'>;
//   ImportStoryCards: ReqData<'ImportStoryCards'>;
//   UpdateScenario: ReqData<'UpdateScenario'>;
//   UpdateScenarioScripts: ReqData<'UpdateScenarioScripts'>;
//   UpdateAdventureState: ReqData<'updateAdventureState'>;
//   UpdateAdventurePlot: ReqData<'UpdateAdventurePlot'>;
// }
// declare interface AIDResponses {
//   GetGameplayAdventure: {
//     adventure: {
//       id: string;
//       publicId: string;
//       shortId: string;
//       scenarioId: string;
//       instructions: null | object;
//       title: string;
//       description: string;
//       tags: string[];
//       nsfw: null;
//       isOwner: boolean;
//       gameState: null;
//       actionCount: number;
//       contentType: 'adventure';
//       createdAt: string;
//       showComments: boolean;
//       commentCount: number;
//       allowComments: boolean;
//       voteCount: number;
//       editedAt: string;
//       published: boolean;
//       unlisted: boolean;
//       deletedAt: null;
//       saveCount: number;
//       shortCode: string;
//       thirdPerson: boolean;
//       imageStyle: null;
//       memory: string;
//       authorsNote: string;
//       __typename: 'Adventure';
//       image: string;
//       userJoined: boolean;
//       userVote: string;
//       isSaved: boolean;
//       user: {
//         id: string;
//         isCurrentUser: boolean;
//         __typename: 'User';
//         isMember: boolean;
//         profile: {
//           id: string;
//           title: string;
//           thumbImageUrl: string;
//           __typename: 'Profile';
//         };
//       };
//       allPlayers: {
//         id: string;
//         userId: string;
//         characterName: null;
//         isTypingAt: null;
//         createdAt: string;
//         deletedAt: null;
//         blockedAt: null;
//         __typename: 'Player';
//         user: {
//           id: string;
//           isCurrentUser: boolean;
//           __typename: 'User';
//           isMember: boolean;
//           profile: {
//             id: string;
//             title: string;
//             thumbImageUrl: string;
//             __typename: 'Profile';
//           };
//         };
//       }[];
//       storyCards: {
//         id: string;
//         type: string;
//         keys: string;
//         value: string;
//         title: string;
//         useForCharacterCreation: boolean;
//         description: string;
//         updatedAt: string;
//         deletedAt: null;
//         __typename: 'StoryCard';
//       }[];
//       actionWindow: {
//         id: string;
//         imageText: null;
//         text: string;
//         type: 'continue' | 'say' | 'do' | 'story' | 'see' | 'repeat';
//         imageUrl: null;
//         adventureId: null;
//         decisionId: null;
//         undoneAt: null;
//         deletedAt: null;
//         createdAt: string;
//         logId: null;
//         __typename: 'Action';
//         shareUrl: string;
//       }[];
//     };
//   };
//   GetAdventureDetails: {
//     adventureState: {
//       id: string;
//       details: {
//         instructions: object;
//         storyCardInstructions: string;
//         storyCardStoryInformation: string;
//         storySummary: string;
//       };
//       __typename: 'Adventure';
//     };
//   };
//   GetScenario: {
//     scenario: {
//       id: string;
//       contentType: string;
//       createdAt: string;
//       editedAt: string;
//       publicId: string;
//       shortId: string;
//       title: string;
//       description: string;
//       prompt: string;
//       memory: string;
//       authorsNote: string;
//       isOwner: boolean;
//       published: boolean;
//       unlisted: boolean;
//       allowComments: boolean;
//       showComments: boolean;
//       commentCount: number;
//       voteCount: number;
//       saveCount: number;
//       storyCardCount: number;
//       tags: string[];
//       adventuresPlayed: number;
//       thirdPerson: boolean;
//       nsfw: null;
//       contentRating: string;
//       contentRatingLockedAt: string;
//       contentRatingLockedMessage: null;
//       type: string;
//       details: {
//         instructions: {
//           type: null;
//           custom: null;
//           scenario: null;
//         };
//         storyCardInstructions: string;
//         storyCardStoryInformation: string;
//       };
//       publishedAt: string;
//       deletedAt: null;
//       blockedAt: null;
//       userId: string;
//       __typename: 'Scenario';
//       parentScenario: null;
//       image: string;
//       options: {
//         id: string;
//         userId: string;
//         shortId: string;
//         title: string;
//         prompt: string;
//         parentScenarioId: null;
//         deletedAt: null;
//         __typename: 'Scenario';
//       }[];
//       userVote: string;
//       isSaved: boolean;
//       user: {
//         id: string;
//         isCurrentUser: boolean;
//         __typename: 'User';
//         isMember: boolean;
//         profile: {
//           id: string;
//           title: string;
//           thumbImageUrl: string;
//           __typename: 'Profile';
//         };
//       };
//       storyCards: {
//         id: string;
//         type: string;
//         keys: string;
//         value: string;
//         title: string;
//         useForCharacterCreation: boolean;
//         description: string;
//         updatedAt: string;
//         deletedAt: null;
//         __typename: 'StoryCard';
//       }[];
//     };
//   };
//   GetAiVersions: {
//     aiVisibleVersions: {
//       success: boolean;
//       message: string;
//       aiVisibleVersions: {
//         id: string;
//         type: 'text' | string;
//         versionName: string;
//         aiDetails: {
//           image: string;
//           title: string;
//           'aid-low': { context: number };
//           'aid-mid': { context: number };
//           'aid-high': { context: number };
//           'aid-ultra': { context: number };
//           context: string;
//           'shadow-low': { context: number };
//           'shadow-mid': { context: number };
//           'shadow-high': { context: number };
//           'shadow-ultra': { context: number };
//           description: string;
//           engineOrder: number;
//           longDescription: string;
//           shortDescription: string;
//           versionTitle: string;
//         };
//         aiSettings: {
//           numSamplesPerCall: number;
//           maxNumSamplesPerCall: number;
//           numSamplesLowerBounds: object;
//           isSafeModel: boolean;
//           isPromoModel: boolean;
//           shouldInjectNewLines: boolean;
//           shouldDeleteLogs: boolean;
//           requestTimeoutMs: number;
//           responseTimeVariationMs: number;
//           currentMinResponseTimeMs: number;
//           latitudeTokenLength: number;
//           bufferTokens: number;
//           maxEngineTokens: number;
//           baseActionCount: number;
//           longTermMemory: boolean;
//           temperature: {
//             max: number;
//             default: number;
//             min: number;
//             step: number;
//           };
//           textLength: {
//             max: number;
//             default: number;
//             min: number;
//           };
//           topK: {
//             max: number;
//             default: number;
//             min: number;
//           };
//           topP: {
//             max: number;
//             default: number;
//             min: number;
//           };
//           repetitionPenalty: {
//             max: number;
//             default: number;
//             min: number;
//           };
//           presencePenalty: {
//             max: number;
//             default: number;
//             min: number;
//             step: number;
//           };
//           countPenalty: {
//             max: number;
//             default: number;
//             min: number;
//           };
//           frequencyPenalty: {
//             max: number;
//             default: number;
//             min: number;
//             step: number;
//           };
//           outputTokens: {
//             max: number;
//             default: number;
//             min: number;
//           };
//           contextTokens: {
//             max: number;
//             default: number;
//             min: number;
//             step: number;
//             chargeCreditsAfter: number;
//             tokensPerCredit: number;
//             rangeThreshold: number;
//             rangeWarning: string;
//           };
//           tokenizer: string;
//           isChatModel: boolean;
//           skipRetryLink: boolean;
//           complexMessages: boolean;
//           isChatInstructEngine: boolean;
//         };
//         access: string;
//         release: string;
//         available: boolean;
//         instructions: string;
//         engineNameEngine: {
//           engineName: string;
//           available: boolean;
//           availableSettings: string[];
//           __typename: 'VisibleModelEngine';
//         };
//         __typename: 'AiVisibleVersion';
//       }[];
//       visibleTextVersions: {
//         id: string;
//         type: 'text';
//         versionName: string;
//         aiDetails: {
//           image: string;
//           title: string;
//           context: string;
//           'aid-high': {
//             context: string;
//           };
//           'aid-ultra': {
//             context: string;
//           };
//           'shadow-low': {
//             context: string;
//           };
//           'shadow-mid': {
//             context: string;
//           };
//           engineOrder: number;
//           'shadow-high': {
//             context: string;
//           };
//           pricingOrder: number;
//           'shadow-ultra': {
//             context: string;
//           };
//           longDescription: string;
//           shortDescription: string;
//           versionTitle: string;
//         };
//         aiSettings: {
//           numSamplesPerCall: number;
//           maxNumSamplesPerCall: number;
//           numSamplesLowerBounds: object;
//           isSafeModel: boolean;
//           isPromoModel: boolean;
//           shouldInjectNewLines: boolean;
//           shouldDeleteLogs: boolean;
//           requestTimeoutMs: number;
//           responseTimeVariationMs: number;
//           currentMinResponseTimeMs: number;
//           latitudeTokenLength: number;
//           bufferTokens: number;
//           maxEngineTokens: number;
//           baseActionCount: number;
//           longTermMemory: boolean;
//           temperature: {
//             max: number;
//             default: number;
//             min: number;
//             step: number;
//           };
//           textLength: {
//             max: number;
//             default: number;
//             min: number;
//           };
//           topK: {
//             max: number;
//             default: number;
//             min: number;
//           };
//           topP: {
//             max: number;
//             default: number;
//             min: number;
//           };
//           repetitionPenalty: {
//             max: number;
//             default: number;
//             min: number;
//           };
//           presencePenalty: {
//             max: number;
//             default: number;
//             min: number;
//             step: number;
//           };
//           countPenalty: {
//             max: number;
//             default: number;
//             min: number;
//           };
//           frequencyPenalty: {
//             max: number;
//             default: number;
//             min: number;
//             step: number;
//           };
//           outputTokens: {
//             max: number;
//             default: number;
//             min: number;
//           };
//           contextTokens: {
//             max: number;
//             default: number;
//             min: number;
//             step: number;
//             chargeCreditsAfter: number;
//             tokensPerCredit: number;
//             rangeThreshold: number;
//             rangeWarning: string;
//           };
//           tokenizer: string;
//           isChatModel: boolean;
//           skipRetryLink: boolean;
//           complexMessages: boolean;
//           isChatInstructEngine: boolean;
//         };
//         access: string;
//         release: string;
//         available: boolean;
//         instructions: string;
//         engineNameEngine: {
//           engineName: string;
//           available: boolean;
//           // availableSettings: [
//           //   'contextTokens',
//           //   'outputTokens',
//           //   'temperature',
//           //   'topP',
//           //   'frequencyPenalty',
//           //   'presencePenalty',
//           //   'memoryLength'
//           // ];
//           availableSettings: string[];
//           __typename: 'VisibleModelEngine';
//         };
//         __typename: 'AiVisibleVersion';
//       }[];
//       visibleImageVersions: {
//         id: string;
//         type: 'image';
//         versionName: string;
//         aiDetails: {
//           cost: number;
//           name: string;
//           image: string;
//           steps: number;
//           title: string;
//           access: string[];
//           // access: [
//           //   'aid-low',
//           //   'aid-mid',
//           //   'aid-high',
//           //   'aid-ultra',
//           //   'shadow-low',
//           //   'shadow-mid',
//           //   'shadow-high',
//           //   'shadow-ultra'
//           // ];
//           author: string;
//           'aid-low': {
//             cost: number;
//             steps: number;
//           };
//           'aid-mid': {
//             cost: number;
//             steps: number;
//           };
//           'aid-high': {
//             cost: number;
//             steps: number;
//           };
//           'aid-ultra': {
//             cost: number;
//             steps: number;
//           };
//           'shadow-low': {
//             cost: number;
//             steps: number;
//           };
//           'shadow-mid': {
//             cost: number;
//             steps: number;
//           };
//           'shadow-high': {
//             cost: number;
//             steps: number;
//           };
//           responseTime: string;
//           'shadow-ultra': {
//             cost: number;
//             steps: number;
//           };
//           longDescription: string;
//           shortDescription: string;
//           versionTitle: string;
//         };
//         aiSettings: {
//           generationCredits: {
//             cost: number;
//           };
//           falAiSize: string;
//         };
//         access: string;
//         release: string;
//         available: boolean;
//         instructions: string;
//         engineNameEngine: {
//           engineName: string;
//           available: boolean;
//           availableSettings: string[];
//           __typename: 'VisibleModelEngine';
//         };
//         __typename: 'AiVisibleVersion';
//       }[];
//       __typename: 'AiVisibleVersionResponse';
//     };
//   };
//   ImportStoryCards: {
//     importStoryCards: {
//       success?: boolean;
//       message?: string;
//       storyCards?: {
//         keys: string;
//         value: string;
//         type: string;
//         __typename: 'StoryCard';
//       }[];
//       __typename?: 'ImportStoryCardsResponse';
//     };
//   };
//   UpdateScenario: {
//     UpdateScenario: {
//       success?: boolean;
//       message?: string;
//       scenario?: {
//         id: string;
//         title: string;
//         description: string;
//         prompt: string;
//         memory: string;
//         authorsNote: string;
//         tags: string[];
//         nsfw: null | boolean;
//         contentRating: string;
//         contentRatingLockedAt: null | string;
//         contentRatingLockedMessage: null | string;
//         published: boolean;
//         thirdPerson: boolean;
//         allowComments: boolean;
//         unlisted: boolean;
//         uploadId: string;
//         type: 'simple' | 'multipleChoice' | 'characterCreator';
//         details: {
//           instructions: {
//             type: 'scenario';
//             custom: null | string;
//             scenario: string;
//           };
//           storySummary: string;
//           storyCardInstructions: string;
//           storyCardStoryInformation: string;
//         };
//         editedAt: string;
//         __typename: 'Scenario';
//         image: string;
//       };
//       __typename?: 'UpdateScenarioResponse';
//     };
//   };
//   UpdateScenarioScripts: {
//     UpdateScenarioScripts: {
//       success?: boolean;
//       message?: string;
//       scenario?: {
//         id: string;
//         onInput: string | null;
//         onModelContext: string | null;
//         onOutput: string | null;
//         sharedLibrary: string | null;
//         __typename: 'Scenario';
//       };
//       __typename?: 'UpdateScenarioScriptsResponse';
//     };
//   };
//   UpdateAdventureState: {
//     updateAdventureState: {
//       success?: boolean;
//       message?: string;
//       adventure?: {
//         id: string;
//         details: {
//           instructions: {
//             type: string;
//             custom: null | string;
//             scenario: string;
//           };
//           storySummary: string;
//           storyCardInstructions: string;
//           storyCardStoryInformation: string;
//         };
//         editedAt: string;
//         __typename: 'Adventure';
//       };
//       __typename?: 'UpdateAdventureStateResponse';
//     };
//   };
//   UpdateAdventurePlot: {
//     updateAdventurePlot: object;
//   };
// }
export declare interface AIDOptions {
  env: string;
  files: PathLike[];
  dir: PathLike[];
  token?: string;
  shortid?: string | string[];
}

export declare class AID {
  public constructor(options: AIDOptions);
  /**
   * This should be kept private at all times.
   */
  public token: string;
  // public token: string | null;
  public options: AIDOptions;
  // public data: {
  //   operationName: string;
  //   variables: {
  //     [key: string]: unknown;
  //   };
  //   query: string;
  // };
  // public headers: AIDHeader<this['token'], this['data']['operationName']>;
  fetch(type: string, shortId: string): Promise<unknown>;
  UpdateScenarioScripts<F>(files: F[]): Promise<this>;
  createFiles(): Promise<
    | [
        {
          onModelContext: string;
        },
        {
          onInput: string;
        },
        {
          sharedLibrary: string;
        },
        {
          onOutput: string;
        }
      ]
    | undefined
  >;
  build(): Promise<this>;
  watch(): void;
}

export default AID;
