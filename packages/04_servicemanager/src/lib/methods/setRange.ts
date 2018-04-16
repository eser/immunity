import ServiceDeclaration from '../serviceDeclaration';
import ServiceDefinitionCollection, { cloneServiceDefinitionCollection } from '../serviceDefinitionCollection';

type SetRangeResult = {
    done: boolean,
    newCollection: ServiceDefinitionCollection,
};

function setRange(collection: ServiceDefinitionCollection, ...declarations: Array<ServiceDeclaration>): SetRangeResult {
    const newCollection = cloneServiceDefinitionCollection(collection);

    for (const declaration of declarations) {
        newCollection.set(
            declaration.dependency,
            {
                target: declaration.target,
                lifetime: declaration.lifetime,
                tags: declaration.tags,
            },
        );
    }

    return {
        done: true,
        newCollection: newCollection,
    };
}

export {
    setRange as default,
    SetRangeResult,
};
