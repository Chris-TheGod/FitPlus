package Base.Domain;

import lombok.NoArgsConstructor;

import java.util.UUID;

@NoArgsConstructor
public abstract class BaseEntityIdImplemented extends BaseEntityId<UUID> {

    protected BaseEntityIdImplemented(UUID id) {
        super(id);
    }
}
