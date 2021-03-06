/**
 * Copyright 2018, OpenCensus Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {CustomAttributeFunction, Span} from '@opencensus/core';
import {ClientRequest, IncomingMessage, ServerResponse} from 'http';

export type IgnoreMatcher<T> =
    string|RegExp|((url: string, request: T) => boolean);

export interface HttpCustomAttributeFunction extends CustomAttributeFunction {
  (span: Span, request: ClientRequest|IncomingMessage,
   response: IncomingMessage|ServerResponse): void;
}

export type HttpPluginConfig = {
  ignoreIncomingPaths?: Array<IgnoreMatcher<IncomingMessage>>;
  ignoreOutgoingUrls?: Array<IgnoreMatcher<ClientRequest>>;
  applyCustomAttributesOnSpan?: HttpCustomAttributeFunction;
};
