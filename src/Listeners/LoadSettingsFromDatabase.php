<?php
namespace ReFlar\CookieConsent\Listeners;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
class LoadSettingsFromDatabase
{
    /**
     * @var string
     */
    protected $packagePrefix = 'reflar-level-ranks.';
    /**
     * @var array
     */
    protected $fieldsToGet = [
        'levelText'
    ];
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;
    /**
     * LoadSettingsFromDatabase constructor.
     *
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }
    /**
     * @param Serializing $event
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            foreach ($this->fieldsToGet as $field) {
                $value = $this->settings->get($this->packagePrefix.$field);
                if (isset($value) && !empty($value)) {
                    $event->attributes[$this->packagePrefix.$field] = $this->settings->get($this->packagePrefix.$field);
                }
            }
        }
    }
}